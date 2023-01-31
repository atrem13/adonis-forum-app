import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'APp/Models/Post'
export default class PostsController {
    public async index({request}: HttpContextContract){
        const posts = await Post.query().preload('user').preload('forum')
    }
}
