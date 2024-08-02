/**
 * adonisjs-flydrive
 *
 * @license MIT
 * @copyright Mixxtor <mixxtor@gmail.com>
 */

import app from '@adonisjs/core/services/app'
import { DriveService } from '../src/types/index.js'

let flydrive: DriveService

/**
 * Returns a singleton instance of the Redis manager from the
 * container
 */
await app.booted(async () => {
  flydrive = await app.container.make('flydrive')
})

export { flydrive as default }