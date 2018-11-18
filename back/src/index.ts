// * NOTE :: leave this until @hapiness/core will be migrated to rxjs v6 - This library is installed automatically
import 'rxjs-compat';
import { HapiConfig, Hapiness, HttpServerExt } from '@hapiness/core';
import { LoggerExt } from '@hapiness/logger';
import { Config } from '@hapiness/config';

import { ApplicationModule } from './application.module';

// bootstrap application
Hapiness.bootstrap(ApplicationModule, [
    LoggerExt,
    HttpServerExt.setConfig(Config.get<HapiConfig>('server'))
])
    .catch(err => console.log(err));
