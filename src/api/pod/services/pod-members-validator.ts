/**
 * pod-members-validator service.
 */

import {factories} from '@strapi/strapi';

export default factories.createCoreService('api::pod.pod-members-validator', ({strapi}) => ({
  // custom functions don't work for some reason
  // async isPodLeadInPod(...args) {
  //
  //   return false;
  // }

}));


//
// export default () => ({
//
//   async isPodLeadInPod(...args) {
//
//     return false;
//   }
// });
