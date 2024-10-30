const db = require('../models');
const User = db.user;

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username, password } });

    if (!user) {
      return res.status(404).send({ message: 'Credenciales incorrectas. Usuario o contraseña no válidos.' });
    }

    res.status(200).send({
      id_user: user.id_user,
      username: user.username,
      role: user.role,
      message: 'Login exitoso'
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
