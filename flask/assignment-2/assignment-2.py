
from flask import Flask, jsonify
from pathlib import Path
import json

app = Flask(__name__)

# JSON file is located in the same folder as this Python file
DICTIONARY_PATH = Path(__file__).resolve().parent / "dictionary.json"


def load_dictionary():
    with open(DICTIONARY_PATH, "r", encoding="utf-8") as file:
        dictionary = json.load(file)

    return dictionary


# Translate an English word into Finnish
@app.route("/translate/<word>")
def translate(word):

    # Read dictionary from JSON file
    dictionary = load_dictionary()

    # Case-insensitive search
    word = word.lower()

    # Check whether the word exists
    if word in dictionary:
        return jsonify({
            "English": word,
            "Finnish": dictionary[word]
        })

    # Word not found
    return jsonify({
        "error": "Word not found"
    }), 404


# Return all available English words
@app.route("/words")
def get_words():

    dictionary = load_dictionary()

    return jsonify(list(dictionary.keys()))


if __name__ == "__main__":
    app.run(debug=True, port=3000)
