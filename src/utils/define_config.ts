/**
 * @mixxtor/adonisjs-flydrive
 *
 * @license MIT
 * @copyright Mixxtor <mixxtor@gmail.com>
 */

import { DriveManagerOptions, DriverContract } from 'flydrive/types'

export function defineConfig<KnownDriveProviders extends Record<string, () => DriverContract>>(
  config: DriveManagerOptions<KnownDriveProviders> & {
    default?: keyof KnownDriveProviders
    services: {
      [K in keyof KnownDriveProviders]: KnownDriveProviders[K]
    }
  }
) {
  return config
}
