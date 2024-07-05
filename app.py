from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('hacakathon.html')  # Make sure you have an 'index.html' in a 'templates' folder

if __name__ == "__main__":
    app.run(debug=True)
