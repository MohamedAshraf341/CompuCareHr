export class ItemStatus {
  
  userId: number;
  pageId: number;
  New: boolean;
  edit: boolean;
  delete:boolean;
  Login:boolean;

  constructor(userId:number, pageId:number,BitAdd:boolean,BitEdit:boolean,BitDelete:boolean ,BitLogin:boolean) {
    this.userId = userId;
    this.pageId = pageId;
    this.New = BitAdd;
    this.edit = BitEdit;
    this.delete = BitDelete;
    this.Login=BitLogin;
  }
}