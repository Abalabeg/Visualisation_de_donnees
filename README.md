# Visualisation_de_donnees
## Description
This visualization aims to show the independence quotient of the words in polite and impolite context. (In the corpus annotated based on politeness)
For this purpose, the visualization is done by donut chart which allows to compare the independence quotient of each word in polite and impolite context. By moving the mouse pointer over the arc, the amount of quotient (polite and impolite) for the word is shown.

![Visualisation](https://github.com/Abalabeg/Visualisation_de_donnees/blob/master/screenshot.png)

## Data
This visualization use Stanford Politeness Corpus, the largest corpus with politeness annotation, provided by Danescu-Niculescu-Mizil et al. (2013).(http://cs.cornell.edu/~cristian/Politeness_files/Stanford_politeness_corpus)
The part of corpus which is used in this visualization, contains the request sentences extracted from Wikipedia. These requests are in engish and each request is labeled if it is polite or impolite.
By creating a document-term matrix, we can calculate independence quotients of the words in polite context in order to obtain the attraction and repulsion relation between the word and the polite and impolit requests.
The final data consist of a document-term matrix where the terms are the words and the documents are the requests sentences merged according to politeness and impoliteness.
The preprocessing of the data is applied by Orange canvas, an open-source data visualization, machine learning and data mining toolkit.
The final result is a saved file in csv.

*This visualization is a part of the course "visualisation de données"  under the supervision of M. Isaac Pante(SP2019).*
