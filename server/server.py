import random
from flask import Flask, render_template, jsonify
from flask_cors import CORS

# Create flask app
app = Flask(__name__, static_folder='../client/dist', template_folder='../client')
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# App Routes:
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/data')
def data():
    return get_data('cats')

@app.route('/api/data2')
def data2():
	return get_data('dogs')

# Returns randomly generated data
def get_data(animal):
    data = [];
    for i in range(40):
    	randomNum = random.randint(0, 100)
    	temp = {'day': i, animal: randomNum, 'label': randomNum}
    	data.append(temp)

    return jsonify(data), 200


if __name__ == '__main__':
    app.run()
