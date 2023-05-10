import {
  trigger,
  transition,
  useAnimation,
  animate,
  animation,
  style,
  state,
} from '@angular/animations';

const downGenericAnimation = animation([
  style({ opacity: 0, transform: 'translateY(-20%)' }),
  animate(
    '{{time}} ease-out',
    style({ opacity: 1, transform: 'translateY(0)' })
  ),
]);

export const downConfirmPassword = trigger('downConfPassword', [
  transition(':enter', [
    useAnimation(downGenericAnimation, {
      params: {
        time: '0.3s 0.3s',
      },
    }),
  ]),
]);
// export const down = trigger('down', [
//   transition(':enter', [
//     useAnimation(downGenericAnimation, {
//       params: {
//         time: '0.5s',
//       },
//     }),
//   ]),
// ]);

export const errorNotification = trigger('errorAnimation', [
  state(
    'invisible',
    style({
      opacity: 0,
      transform: 'translateY(-20%)',
    })
  ),
  state(
    'visible',
    style({
      opacity: 1,
      transform: 'translateY(0)',
    })
  ),
  transition('invisible <=> visible', [animate('0.5s ease-out')]),
]);
