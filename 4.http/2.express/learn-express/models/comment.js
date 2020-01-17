module.exports = (sequilize, DataTypes) => {
  return sequilize.define('comment', {
    comment: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequilize.literal('now()'),
    },
  }, {
    timestamps: false,
    paranoid: true,
  });
}
