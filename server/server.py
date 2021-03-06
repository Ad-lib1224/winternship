import random
import csv
from flask import Flask, render_template, jsonify
from flask_cors import CORS

# Create flask app
app = Flask(__name__, static_folder='../client/dist', template_folder='../client')
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# App Routes:
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/freqData')
def freqData():
    return format_label_freq_data()

@app.route('/api/LabelSafeSearch')
def LabelSafeSearch():
    return format_label_safe_search_data()

@app.route('/api/wordcount')
def WordCount():
    return formatFreqData('./server/WordCount.csv')

@app.route('/api/wordfrequency')
def WordFrequency():
    return formatFreqData('./server/wordfrequency.csv')


def formatFreqData(filename):
    print(filename)
    data=[]
    with open(filename) as csv_file:
        csv_reader = csv.reader(csv_file,delimiter=',')
        for row in csv_reader:
            temp=[row[0],row[1]]
            data.append(temp)
        return jsonify(data),200


def format_label_freq_data(): 
    with open('./server/test.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        arr = []
        for row in csv_reader:
            temp = [row[0], row[1]]
            arr.append(temp)
        return jsonify(arr), 200

def format_label_safe_search_data():
    with open('./server/LabelSafeSearch.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        arr = []
        for row in csv_reader:
            temp = [row[0],row[1],row[2],row[3],row[4],row[5]]
            arr.append(temp)
        return jsonify(arr), 200


if __name__ == '__main__':
    app.run()
