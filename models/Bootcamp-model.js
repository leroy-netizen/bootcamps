import mongoose from 'mongoose';

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
    maxlength: [30, 'Name length cannot exceed 30 characters'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'description is required'],
    maxlength: [500, 'Only a maximum of 500 characters is supported'],
  },
  match: [
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    'Please use a valid URL with HTTP or HTTPS',
  ],
  phone: {
    type: String,
    maxLength: [10, 'Phone number cannot exceed 10 characters'],
  },
  email: {
    type: String,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email'],
  },
  address: {
    type: String,
    required: [true, 'Enter a valid address'],
  },
  location: {
    //GeoJSON point
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere',
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  careers: {
    //array of strings
    type: [String],
    required: true,
    enum: [
      'MobileDevelopment',
      'Web Development',
      'DevOps Engineering',
      'UI/UX design',
      'Data Science',
      'AI/ML ',
      'Business',
      'Other',
    ],
  },
  averageRating: {
    type: [Number],
    min: [1, 'rating must be at least 1'],
    max: [10, 'rating must be at most 10'],
  },
  averageCost: Number,
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
  housing: {
    type: Boolean,
    default: false,
  },
  jobAssistance: {
    type: Boolean,
    default: false,
  },
  jobGuarantee: {
    type: Boolean,
    default: false,
  },
  acceptGi: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BootcampModel = mongoose.model('BootcampModel', BootcampSchema);

export default BootcampModel;
