from flask import Flask, render_template,redirect,request, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Post(db.Model):
    __name__ = 'posts'
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(100), nullable=False)
    fecha = db.Column(db.DateTime, default=datetime.now)
    texto = db.Column(db.Text, nullable=False)

@app.route('/')
def index():
    posts = Post.query.order_by(Post.fecha.desc()).all()
    return render_template('index.html', posts=posts)
@app.route('/form')
def agregar():
    return render_template('agregar.html')
@app.route('/crear', methods=['POST'])
def crear():
    titulo = request.form['titulo']
    texto = request.form['texto']
    post = Post(titulo=titulo, texto=texto)
    db.session.add(post)
    db.session.commit()
    return redirect(url_for('index'))
@app.route('/borrar', methods=['POST'])
def borrar():
    id_para_borrar = request.form['boton_eliminar']
    post = Post.query.get(id_para_borrar)
    db.session.delete(post)
    db.session.commit()
    return redirect(url_for('index'))

if __name__ == '__main__':
    from app import app, db
    with app.app_context():
        db.create_all()
    app.run(debug=True)