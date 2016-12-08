var password = require('../routes/password');

// Dummy user data
var users = [
  {
    username: 'DT',
    first_name: 'Daniel',
    last_name: 'Tsui',
    email: 'dt@ga.co',
    mentoring: 'General',
    learning: 'design',
    bio: 'Web Development Immersive Lead Instructor at General Assembly',
    contact_info: 'Breakout space'
  },
  {
    username: 'HMAN1911',
    first_name: 'Harry',
    last_name: 'Aydin',
    email: 'harry@ga.co',
    mentoring: 'NodeJS',
    learning: 'PHP',
    bio: 'Teaching Assistant at General Assembly',
    contact_info: 'LinkedIn'
  },
  {
    username: 'kasun-maldeni',
    first_name: 'Kasun',
    last_name: 'Maldeni',
    email: 'kasun@ga.co',
    mentoring: 'C-sharp',
    learning: 'MEAN',
    bio: 'Teaching Assistant at General Assembly',
    contact_info: 'Breakout space'
  },
  {
    username: 'BobbyTables',
    first_name: 'Bobby',
    last_name: 'Tables',
    email: 'bobby@ga.co',
    mentoring: 'SQL',
    learning: 'React',
    bio: 'Hi, everybody calls me \';DROP TABLE STUDENTS;--',
    contact_info: 'Breakout space'
  }
];

// Room data
var rooms = [
  {
    name: 'Classroom 1',
    capacity: 25,
    location: '45 William St, Melbourne'
  },
  {
    name: 'Classroom 4',
    capacity: 10,
    location: '45 William St, Melbourne'
  }
];

exports.seed = function(knex, Promise) {
  // Deletes existing entries
  return Promise.all([
    knex('users').del(),
    knex('rooms').del(),
    knex('bookings').del(),
    knex('activities').del(),
    knex('tickets').del()
  ])
  // Reset ID sequences
  .then(() => {
    return Promise.all([
      knex.raw('ALTER SEQUENCE activities_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE bookings_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE rooms_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE tickets_id_seq RESTART WITH 1'),
      knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1')
    ]);
  })
  // Add users
  .then(() => {
    return Promise.all(users.map((user) => {
      return knex('users').insert({
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_no: '555 555 5555',
        password: password.generateHash('cakepudding'),
        photo_url: '',
        mentoring: user.mentoring,
        learning: user.learning,
        bio: users.bio,
        contact_info: user.contact_info
      })
    }))
  })
  // Add rooms
  .then(() => {
    return Promise.all(rooms.map((room) => {
      return knex('rooms').insert(room);
    }));
  });
};
