import mongoose from 'mongoose';

const Tab = mongoose.model(
  'Tab',
  new mongoose.Schema({
    name: String,
    description: String,
    dataPoints: [],
  }, { timestamps: true }),
);

export default Tab;
