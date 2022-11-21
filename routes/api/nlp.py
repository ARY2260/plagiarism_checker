import spacy
import sys
nlp = spacy.load('en_core_web_sm')
text1 = nlp(sys.argv[1])
text2 = nlp(sys.argv[2])

ratio = text1.similarity(text2)

print({
    "status":200,
    "ratio": ratio,
    "msg":"Similarity score calculated successfully"
})