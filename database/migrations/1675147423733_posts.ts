import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 225).notNullable()
      table.string('content', 225).notNullable()
      table.integer('user_id').notNullable()
      table.integer('forum_id').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
