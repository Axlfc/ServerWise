const express = require('express');
const router = express.Router();
const serverController = require('../controllers/serverController');

router.get('/status/:serverName', async (req, res) => {
  try {
    const status = await serverController.getServerStatus(req.params.serverName);
    res.json({ status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/start/:serverName', async (req, res) => {
  try {
    const start = await serverController.startServer(req.params.serverName);
    res.json({ start });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/stop/:serverName', async (req, res) => {
  try {
    const stop = await serverController.stopServer(req.params.serverName);
    res.json({ stop });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/restart/:serverName', async (req, res) => {
  try {
    const restart = await serverController.restartServer(req.params.serverName);
    res.json({ restart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/enable/:serverName', async (req, res) => {
  try {
    const enable