import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  status: string;
  owner_id: string;
  chef_id: string;
  created_at?: any;
  updated_at?: any;

  user_invitation_owner_idTouser?: UserInterface;
  user_invitation_chef_idTouser?: UserInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  owner_id?: string;
  chef_id?: string;
}
