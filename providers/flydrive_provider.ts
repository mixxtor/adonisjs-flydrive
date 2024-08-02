/**
 * adonisjs-flydrive
 *
 * @license MIT
 * @copyright Mixxtor <mixxtor@gmail.com>
 */

import type { ApplicationService } from '@adonisjs/core/types'
import type { DriveManagerOptions } from 'flydrive/types'
import { DriveManager } from 'flydrive'
import type { DriveService } from '../src/types/index.js'

export default class FlydriveProvider {
  constructor(protected app: ApplicationService) {
    this.app = app
  }

  /**
   * Register bindings to the container
   */
  register() { }

  /**
   * The container bindings have booted
   */
  async boot() {
    const config = this.app.config.get<DriveManagerOptions<any>>('flydrive', {})
    this.app.container.bind('flydrive', () => new DriveManager(config))
  }

  /**
   * The application has been booted
   */
  async start() { }

  /**
   * The process has been started
   */
  async ready() { }

  /**
   * Preparing to shut down the app
   */
  async shutdown() { }
}

declare module '@adonisjs/core/types' {
  export interface ContainerBindings {
    flydrive: DriveService
  }
}