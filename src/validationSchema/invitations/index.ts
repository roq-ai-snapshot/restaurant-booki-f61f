import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  owner_id: yup.string().nullable().required(),
  chef_id: yup.string().nullable().required(),
});
