import React, { useState, useCallback } from 'react';
import AsyncApiComponent, { PluginAPI } from '@asyncapi/react-component';
import '@asyncapi/react-component/styles/default.css';
import { streetlights as schema } from './spec';

const testPlugin = {
  name: 'debug-plugin',
  version: '1.0.0',
  install(api: PluginAPI) {
    setInterval(() => {
      api.emit('plugin:ready', { ts: Date.now() });
    }, 1000);
  },
};

export default function RoughApp() {
  const [logPrefix, setLogPrefix] = useState('v1');
  const [visible, setVisible] = useState(true);
  const [eventCount, setEventCount] = useState(0);

  const handlePluginEvent = useCallback((eventName: string, data: unknown) => {
    setEventCount((count) => count + 1);
    console.log(`${logPrefix} ->`, eventName, data);
  }, [logPrefix]);

  return (
    <div>
      <h2>Plugin Event Test</h2>
      <p>Total plugin events received: {eventCount}</p>
      <button onClick={() => setLogPrefix((p) => (p === 'v1' ? 'v2' : 'v1'))}>
        Change onPluginEvent identity
      </button>
      <button onClick={() => setVisible((v) => !v)}>Toggle AsyncApiComponent</button>

      {visible && (
        <AsyncApiComponent
          schema={schema}
          plugins={[testPlugin]}
          onPluginEvent={handlePluginEvent}
        />
      )}
    </div>
  );
}
