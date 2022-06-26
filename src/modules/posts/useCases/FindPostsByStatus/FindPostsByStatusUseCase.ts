import { Post } from 'database/entities/Post';
import { IPostsRepository } from 'modules/posts/repositories/IPostsRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  status: 'active' | 'inactive';
  page?: number;
  limit?: number;
}

injectable();
export class FindPostsByStatusUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) {}

  async execute({ status, page, limit }: IRequest): Promise<Post[]> {
    if (!status) throw new Error('Status is required');
    const posts = await this.postsRepository.findByStatus({
      status,
      page,
      limit,
    });
    return posts;
  }
}
