from flask import Flask, render_template, request

app= Flask(__name__)
@app.route('/')
def root():
    return render_template('root.html')
@app.route('/saludar', methods=['POST'])
def hello():
    name = request.form.get('ruta').strip()
    
    return render_template('index.html', name=name)
if __name__ == '__main__':
    app.run(debug=True)