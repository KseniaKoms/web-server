import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm/entities/Post';
import { CreatePostParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}
  findPosts() {
    return this.postRepository.find();
  }
  createPost(postDetails: CreatePostParams) {
    const newPost = this.postRepository.create({ ...postDetails });
    return this.postRepository.save(newPost);
  }
}
