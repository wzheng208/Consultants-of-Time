export type WatchItem = {
  id: string;
  brand: string;
  model: string;
  reference?: string;
  caseSize: string;
  condition: string;
  boxPapers: string;
  note: string;
  price?: string;
  image: string;
};

export const inventory: WatchItem[] = [
  {
    id: 'vc-overseas-47040',
    brand: 'Vacheron Constantin',
    model: 'Overseas',
    reference: '47040',
    caseSize: '42mm',
    condition: 'Preowned • Like New',
    boxPapers: 'Box & Papers',
    note: 'Textured guilloché dial • Exceptional condition • Late-production example',
    price: 'Inquire',
    image: '/watches/vacheron_constantin.png',
  },
  {
    id: 'panerai-submersible-pam24',
    brand: 'Panerai',
    model: 'Luminor Submersible',
    reference: 'PAM 00024',
    caseSize: '44mm',
    condition: 'Preowned • Good',
    boxPapers: 'Watch + Service Papers',
    note: 'Discontinued classic • Tool-watch heritage • Strong wrist presence',
    price: 'Inquire',
    image: '/watches/panerai_luminor.png',
  },
  {
    id: 'rolex-deepsea-james-cameron',
    brand: 'Rolex',
    model: 'Sea-Dweller Deepsea “James Cameron”',
    reference: '126660',
    caseSize: '44mm',
    condition: 'Preowned • Great',
    boxPapers: 'Box + Appraisal + Service Photo',
    note: 'D-Blue gradient dial • Serviced 06/2025 • 3,900m water resistance',
    price: 'Inquire',
    image: '/watches/rolex_sea_dweller.png',
  },
  {
    id: 'panerai-ferrari-granturismo',
    brand: 'Panerai × Ferrari',
    model: 'Granturismo Chronograph',
    reference: 'FER00011',
    caseSize: '45mm',
    condition: 'Preowned • Good',
    boxPapers: 'Watch Only',
    note: 'Discontinued collaboration • Limited production • Motorsport design',
    price: 'Inquire',
    image: '/watches/yellow_panerai_ferrari_granturismo_1.png',
  },
];
