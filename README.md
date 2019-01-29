# winternship

Setup instructions
1. Check that python, npm, and pip are all installed:
 	* `python --version`
 	* `npm --version`
 	* `pip --version`
2. Install node modules: `npm install`
3. Build frontend with webpack: `npm run watch` <-- changing files in the client folder will automatically trigger a rebuild
4. In a new terminal tab: Create a virtual environment for python
	* Install venv: `pip install virtualenv`
	* Create a virtual environment: `virtualenv env` OR `python3 -m venv env` (if on python 3)
	* Start the virtual env: `source env/bin/activate`
4. Inside virtual env: Install flask: `pip install flask` and `pip install flask_cors`
5. Start the server: `python server/server.py`
7. Go to `localhost:5000` in your web browser

Project Overview

For the past three weeks, the Winterns: Starasia, Savana, Wadgma, Sandy, and Urooj,have worked collaboratively with the Kargo Software Engineering Team to complete the challenge project. The challenge project was to use Kargo creatives (i.e. advertisements) and various analytics tools to build a creative evaluation analytics report. The Winternship was broken down into three parts:

1. Data Population: Query and feed creatives to evaluator;aggregate data using Google Vision API and Python
2. Analysis: Identify features/data to formulate and perform analysis using Google Sheets
3. Reporting: Create frontend one-pager of analytics using React and JavaScript.

The Winterns are proud to debut their not only their data population and analysis, but two frontend projects! With only two days of the Winternship remaining, Savana, Wadgma and Urooj decided to create a webpage using HTML/CSS and JavaScript, while Sandy and Starasia worked with React. In this repository, built by Sandy and Starasia, you'll find four graphs with their accompanying insights on Label Detection, Safe Search and Text Detection.
