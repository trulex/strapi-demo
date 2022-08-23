/**
 *  pod controller
 */

import {factories} from '@strapi/strapi'


export default factories.createCoreController('api::pod.pod', ({strapi}) => ({

  async update(ctx) {
    // await strapi.service('api::pod.pod-members-validator').isPodLeadInPod(ctx);

    try {
      return await super.update(ctx);
    } catch (e) {
      return ctx.badRequest(e);
    }
  }

}));
