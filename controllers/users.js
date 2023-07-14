const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
  res.render('register', { title: 'Register as a new User' });
}

const postCreateUser = async (req, res) => {
  // get user details from req.body
  console.log(req.body);
  const { firstName, lastName, email, username, password } = req.body;
  console.log(username, password, firstName, lastName, email);

  // Create a new hard coded user
  const newUser = await User.create({
    username,
    password,
    firstName,
    lastName,
    email,
  });
  console.log("New user's auto-generated ID:", newUser.id);
  res.send('User created');
};

const getUserByID = (req, res) => {
  const { firstName, lastName, email, image, id } = req.user;
  console.log(firstName, lastName, email, image, id);

  res.render('profile', {
    title: 'User Profile',
    firstName,
    lastName,
    email,
    image,
    id,
  });
};

/* Edit User */
const editUserByID = async (req, res, next) => {
  const id = req.params.id;
  const { firstName, lastName, email } = await User.findByPk(id);
  console.log(firstName, lastName, email, id);
  res.render('edit', { title: 'Edit User', id, firstName, lastName, email });
}

const postEditUserByID = async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email } = req.body;
  await User.update({ firstName, lastName, email }, { where: { id: id } });
  res.redirect(`/users/profile/${id}`);
};

/* Delete User */
const deleteUserByID = async (req, res) => {
  const id = req.params.id;

  const { firstName, lastName, email } = await User.findByPk(req.params.id);
  console.log(firstName);
  res.render("delete", {
    title: "Delete this User",
    id,
    firstName,
    lastName,
    email,
  });
};

const getLogin = async (req, res) => {
  // code to login user
  // load template with a form

  res.render('login', { title: 'Login to our App' });
};

const postLogin = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username },
  });

  if (user == null) {
    res.render('login', { title: 'Login', error: 'User not found' });
  } else {
    const hashedPW = user.password;
    await bcrypt.compare(password, hashedPW, function (err, result) {
      // result == true
      console.log(result);

      if (result) {
        // create JWT and save as cookie
        const token = jwt.sign({ foo: 'bar' }, 'superSecretPrivateKey', {expiresIn: '1h'});
        console.log(token);

        res.cookie("token", token);
        res.redirect('/');
      } else res.render('login', { title: 'Login', error: 'Passwords do not match' });
    });
  }
};



module.exports = {
  getAllUsers,
  createUser,
  postCreateUser,
  getUserByID,
  editUserByID,
  postEditUserByID, 
  deleteUserByID,
  getLogin, 
  postLogin
}