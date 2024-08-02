/**
 * adonisjs-flydrive
 *
 * @license MIT
 * @copyright Mixxtor <mixxtor@gmail.com>
 */

import { DriveManager } from 'flydrive'
import type { DriveManagerOptions, DriverContract } from 'flydrive/types'

/**
 * A list of known caches stores inferred from the user config
 * This interface must be extended in user-land
 */
export interface DriveProviders { }

/**
 * Infer the drivers from the user config
 */
export type InferDriveProviders<T extends DriveManagerOptions<Record<string, () => DriverContract>>> = T['services']

/**
 * Drive service is shared with all the other services.
 */
export interface DriveService extends DriveManager<DriveProviders extends Record<string, () => DriverContract> ? DriveProviders : never> { }
