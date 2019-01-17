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

@app.route('/api/barData')
def barData():
    return get_data('cats', 1)

@app.route('/api/lineData')
def lineData():
	return get_data('cats', 0)

# Returns randomly generated data
def get_data(animal, label):
    data = [];
    for i in range(40):
    	randomNum = random.randint(0, 100)
    	if label == 1:
    		temp = {'day': i, animal: randomNum, 'label': randomNum}
    	else:
    		temp = {'day': i, animal: randomNum}
    	data.append(temp)

    return jsonify(data), 200


if __name__ == '__main__':
    app.run()