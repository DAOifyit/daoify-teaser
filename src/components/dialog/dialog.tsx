import * as RadixDialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

export default function Dialog() {

  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>
        <button className="Button violet">Edit profile</button>
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="DialogOverlay" />
        <RadixDialog.Content className="DialogContent">
          <RadixDialog.Title className="DialogTitle">Edit profile</RadixDialog.Title>
          <RadixDialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you're done.
          </RadixDialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue="Pedro Duarte" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Username
            </label>
            <input className="Input" id="username" defaultValue="@peduarte" />
          </fieldset>
          <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
            <RadixDialog.Close asChild>
              <button className="Button green">Save changes</button>
            </RadixDialog.Close>
          </div>
          <RadixDialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
};