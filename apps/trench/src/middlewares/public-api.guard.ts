import { Injectable } from '@nestjs/common'
import { ApiKeysService } from '../api-keys/api-keys.service'
import { ApiGuard } from './api.guard'

@Injectable()
export class PublicApiGuard extends ApiGuard {
  constructor(apiKeysService: ApiKeysService) {
    super(apiKeysService, 'public')
  }
}
