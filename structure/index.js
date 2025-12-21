import {filteredDocumentListItems, singletonDocumentListItems} from 'sanity-plugin-singleton-tools'

export const structure = (S, context) => {
  return S.list()
    .title('Junoon')
    .items([
      ...singletonDocumentListItems({S, context}),
      S.divider(),
      ...filteredDocumentListItems({S, context}),
    ])
}
