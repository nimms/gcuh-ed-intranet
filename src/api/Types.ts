export interface IDocumentType {
  Id: number;
  Title: string;
  ServerRedirectedEmbedUri: string;
}

export interface ISharepointState {
  loading?: boolean;
  documents: IDocumentType[];
  filteredDocuments: IDocumentType[];
  errors?: string;
}
