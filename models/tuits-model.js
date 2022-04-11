import mongoose from 'mongoose';
import tuitsSchema from '../schema/tuits-schema.js'
const tuitsModel = mongoose
.model('TuitModel', tuitsSchema);
export default tuitsModel;