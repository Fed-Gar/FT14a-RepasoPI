var Sequelize = require('sequelize');
const S = Sequelize;
var db = new Sequelize('postgres://postgres:example@localhost:5432/henryblog', {
  logging: false,
});

const { STRING, ENUM, VIRTUAL, TEXT } = S.DataTypes;

const Page = db.define('page', {
  // Tu código acá:
  title: { type: STRING, allowNull: false },
  urlTitle: { type: STRING, allowNull: false },
  content: { type: TEXT, allowNull: false },
  status: { type: ENUM('open', 'closed'), allowNull: true },
  route: {
    type: VIRTUAL,
    allowNull: true,
    get() {
      return `/pages/${this.getDataValue('urlTitle')}`
    }
  },
});

// .addHook() method
Page.addHook('beforeValidate', (page) => {
  if (page) {
    page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '')
  }
})

const User = db.define('users', {
  name: { type: STRING, allowNull: false },
  email: { type: STRING, allowNull: false, unique: true },
});

const Category = db.define('category', {
  // Tu código acá:
  name: { type: STRING, allowNull: false, unique: true },
  description: { type: STRING, allowNull: true },
});

// Vincular User con Page
// Tu código acá:
User.hasMany(Page)
Page.belongsTo(User)

Page.belongsToMany(Category, { through: 'page_category' })
Category.belongsToMany(Page, { through: 'page_category' })


module.exports = {
  User,
  Page,
  Category,
  db
}
