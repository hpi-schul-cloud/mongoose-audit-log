const mongoose = require('mongoose');

const auditSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  changes: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  user: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Audit', auditSchema);
