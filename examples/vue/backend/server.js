// backend/server.js

const express = require('express');
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');
const tokenizer = require('./tokenizer');
const app = express();
const port = 3000;

// app.use(express.json()); // for parsing application/json

// const path = require('path');

// let model;
// async function loadModel() {
//   const modelPath = path.resolve(__dirname, 'model/saved_model.pb');
//   model = await tf.loadGraphModel(`file://${modelPath}`);
// }
// loadModel();

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

// app.post('/predict', async (req, res) => {
//   const inputText = req.body.data;
//   const tokenizedInput = tokenizer.texts_to_sequences(inputText, tokenizer);
//   const inputData = tf.tensor2d(tokenizedInput, [1, tokenizedInput.length]);
//   const prediction = model.predict(inputData);
//   const predictionData = await prediction.data();
//   res.json({ prediction: predictionData });
// });

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
});