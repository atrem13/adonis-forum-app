import { DateTime } from 'luxon'
import User from 'App/Models/User'
import Forum from 'App/Models/Forum'
import { 
  BaseModel,
  column,
  belongsTo,
  BelongsTo
} from '@ioc:Adonis/Lucid/Orm'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public forumId: number

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Forum)
  public forum: BelongsTo<typeof Forum>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
