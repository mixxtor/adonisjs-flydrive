/**
 * @mixxtor/adonisjs-flydrive
 *
 * @license MIT
 * @copyright Mixxtor <mixxtor@gmail.com>
 */

import type Configure from '@adonisjs/core/commands/configure'
import { stubsRoot } from './stubs/main.js'

/**
 * Configures the package
 */
export async function configure(command: Configure) {
  const codemods = await command.createCodemods()

  /**
   * Publish config file
   */
  await codemods.makeUsingStub(stubsRoot, 'config/flydrive.stub', {})

  /**
   * Add environment variables
   */
  await codemods.defineEnvVariables({
    AWS_S3_KEY: '',
    AWS_S3_SECRET: '',
    AWS_S3_REGION: '',
    AWS_S3_BUCKET: '',
  })

  /**
   * Validate environment variables
   */
  await codemods.defineEnvValidations({
    variables: {
      AWS_S3_KEY: `Env.schema.string.optional()`,
      AWS_S3_SECRET: 'Env.schema.string.optional()',
      AWS_S3_REGION: 'Env.schema.string.optional()',
      AWS_S3_BUCKET: 'Env.schema.string.optional()',
    },
  })

  /**
   * Add provider to rc file
   */
  await codemods.updateRcFile((rcFile) => {
    rcFile.addProvider('adonisjs/flydrive/providers/flydrive_provider')
  })
}