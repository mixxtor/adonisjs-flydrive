# AdonisJS Flydrive

**AdonisJS FlyDrive** integrates the **[Flydrive](https://github.com/flydrive-js/core)** file storage library into AdonisJS 6, providing a seamless cloud storage solution within the AdonisJS framework. This package leverages FlyDrive’s unified API to manage file storage across various cloud services and local filesystems.

This package brings the versatility of Flydrive to AdonisJS, allowing you to manage file storage efficiently and adaptively within the AdonisJS ecosystem.

## Getting Started

```bash
npm install adonisjs-flydrive
```

## Configuration

```bash
node ace configure adonisjs-flydrive
```

Settings can be configured in `config/flydrive.ts`

Sample config:

```ts
import app from '@adonisjs/core/services/app'
import { env } from '@adonisjs/core/build/config'
import { defineConfig } from 'adonisjs-flydrive'
import { FSDriver } from 'flydrive/drivers/fs'
import { S3Driver } from 'flydrive/drivers/s3'
import { GCSDriver } from 'flydrive/drivers/gcs'

export default defineConfig({
  default: 'fs',
  services: {
    fs: () =>
      new FSDriver({
        location: app.tmpPath(),
        visibility: 'private',
      }),

    gcs: () =>
      new GCSDriver({
        region: 'us-east-1',
        credentials: {
          accessKeyId: env('GCS_CLIENT_ID'),
          secretAccessKey: env('GCS_SECRET_KEY'),
        },
        visibility: 'public',
      }),

    s3: () =>
      new S3Driver({
        credentials: {
          accessKeyId: env('AWS_S3_KEY'),
          secretAccessKey: env('AWS_S3_SECRET'),
        },
        region: env('AWS_S3_REGION'),
        bucket: env('AWS_S3_BUCKET'),
        visibility: 'private',
      })
  },
})
```

See [flydrive](https://github.com/flydrive-js/core) for more information

## Usage

```ts
import flydrive from 'adonisjs-flydrive/services/main'

const drive = flydrive.use('fs')
await drive.put('file.txt', 'hello world')
const file = await drive.get('file.txt')
await drive.delete('file.txt')
```

## Contributing

See [CONTRIBUTING.md](https://github.com/mixxtor/adonisjs-flydrive/blob/master/CONTRIBUTING.md)

## License

See [LICENSE.md](https://github.com/mixxtor/adonisjs-flydrive/blob/master/LICENSE.md)