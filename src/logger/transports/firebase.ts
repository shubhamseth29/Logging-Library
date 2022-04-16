import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import _ from 'lodash';
import { inspect } from 'util';
import { createTemplate, format } from '../format.js';
import Transport, { TransportConfig } from './transport.js';





interface Config extends TransportConfig {
    apiKey: string,
    authDomain: string,
    databaseURL: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string
}

const defaultConfig: Partial<Config> = {
  level: 'info',
  template: createTemplate(
    format.level(),
    format.text(' - '),
    format.date('DD/MM/YYYY'),
    format.newLine(),
    format.location(),
    format.newLine(),
    format.message(),
  ),
};

class FirebaseTransport extends Transport<Config> {

  public constructor(unsafeConfig: Config) {
    const config = { ...defaultConfig, ...unsafeConfig };
    super(config);
  }

  public format(value: any): string {
    if (_.isObject(value)) {
      return `\n${inspect(value, false, null, false)}\n`;
    }

    return String(value);
  }

  public log({ message, level }: { message: string; level: string }) {

    let firebaseConfig = {
        apiKey: this.config.apiKey,
        authDomain: this.config.authDomain,
        databaseURL: this.config.databaseURL,
        projectId:this.config.projectId,
        storageBucket: this.config.storageBucket,
        messagingSenderId: this.config.messagingSenderId,
        appId: this.config.appId,
        measurementId: this.config.measurementId
    }

    let app = initializeApp(firebaseConfig);

    const db = getDatabase();
    set(ref(db, 'logsId/' + '1'), {
        message
    });

    return message;
  }
}

export default FirebaseTransport;
