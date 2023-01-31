import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Forums extends BaseSchema {
  protected tableName = 'forums'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 225).notNullable();
      table.string('description', 225).notNullable();
      table.integer('user_id').notNullable();
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
