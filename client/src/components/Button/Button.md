Button example:

```tsx
     <section>
        <h2>Primary Buttons</h2>
        <div>
          <h3>Enabled</h3>
          <Button onClick={console.log} children={'Small'} />
          <Button onClick={console.log} children={'Medium'} size={'md'} />
          <Button onClick={console.log} children={'Large'} size={'lg'} />
        </div>
        <div>
          <h3>Hover | Pressed | Focused </h3>
          <Button onClick={console.log} children={'Small'} />
          <Button onClick={console.log} children={'Medium'} size={'md'} />
          <Button onClick={console.log} children={'Large'} size={'lg'} />
        </div>
        <div>
          <h3>Disabled</h3>
          <Button onClick={console.log} children={'Small'} disabled={true} />
          <Button
            onClick={console.log}
            children={'Medium'}
            size={'md'}
            disabled={true}
          />
          <Button
            onClick={console.log}
            children={'Large'}
            size={'lg'}
            disabled={true}
          />
        </div>
      </section>

      <section>
        <h2>Secondary Buttons</h2>
        <div>
          <h3>Enabled</h3>
          <Button
            onClick={console.log}
            variant={'secondary'}
            children={'Small'}
          />
          <Button
            onClick={console.log}
            variant={'secondary'}
            children={'Medium'}
            size={'md'}
          />
          <Button
            onClick={console.log}
            variant={'secondary'}
            children={'Large'}
            size={'lg'}
          />
        </div>
        <div>
          <h3>Hover | Pressed | Focused </h3>
          <Button
            onClick={console.log}
            variant={'secondary'}
            children={'Small'}
          />
          <Button
            onClick={console.log}
            variant={'secondary'}
            children={'Medium'}
            size={'md'}
          />
          <Button
            onClick={console.log}
            variant={'secondary'}
            children={'Large'}
            size={'lg'}
          />
        </div>
        <div>
          <h3>Disabled</h3>
          <Button
            onClick={console.log}
            variant={'secondary'}
            children={'Small'}
            disabled={true}
          />
          <Button
            onClick={console.log}
            variant={'secondary'}
            children={'Medium'}
            size={'md'}
            disabled={true}
          />
          <Button
            onClick={console.log}
            variant={'secondary'}
            children={'Large'}
            size={'lg'}
            disabled={true}
          />
        </div>
      </section>
```
