/**
 * pod service.
 */

import {factories} from '@strapi/strapi';

export default factories.createCoreService('api::pod.pod', ({strapi}) => ({

  async update(...args) {
    strapi.log.info("services/pod.update called with" + JSON.stringify(args));

    if (isPodLeadInPod(args)) {
      return await super.update(...args);
    }
    throw new Error("Pod lead must be a member.")
  }

}));

function isPodLeadInPod(args) {
  const data = args[1]['data'];
  return data.podMembers.includes(data.podLead);
}
