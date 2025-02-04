module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('matches', {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        },
        home_team: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'teams',
                key: 'id',
            },
        },
        home_team_goals: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        away_team: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'teams',
                key: 'id',
            },
        },
        away_team_goals: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        in_progress: {
           allowNull: false,
           defaultValue: 0,
           type: Sequelize.INTEGER, 
        },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('matches');
    },
  };
  