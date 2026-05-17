import Swal, { SweetAlertOptions, SweetAlertCustomClass } from 'sweetalert2';

const baseCustomClass: SweetAlertCustomClass = {
  popup: 'rounded-none border-[3px] border-[#494947] shadow-[8px_8px_0px_#000000]',
  title: 'font-creato-title font-black uppercase tracking-wider text-[#E2E2DE]',
  htmlContainer: 'text-[#B7AC9B]',
  confirmButton: 'rounded-none font-black uppercase tracking-widest text-sm px-6 py-2.5',
  cancelButton: 'rounded-none font-black uppercase tracking-widest text-sm px-6 py-2.5',
  input: 'rounded-none border-2 border-[#494947] bg-[#1a1a1a] text-[#E2E2DE] font-bold',
};

const baseOptions: SweetAlertOptions = {
  background: '#1C1C1B',
  color: '#E2E2DE',
  confirmButtonColor: '#6A5D52',
  cancelButtonColor: '#494947',
  customClass: baseCustomClass,
};

function mergeOptions(...optionsList: SweetAlertOptions[]): SweetAlertOptions {
  const merged: Record<string, any> = {};
  for (const opts of optionsList) {
    Object.assign(merged, opts);
  }
  // Merge customClass separately
  const mergedCustomClass: Record<string, string> = {};
  for (const opts of optionsList) {
    if (opts.customClass && typeof opts.customClass === 'object') {
      Object.assign(mergedCustomClass, opts.customClass);
    }
  }
  merged.customClass = mergedCustomClass;
  return merged as SweetAlertOptions;
}

/** Confirm dialog (warning with cancel) */
export const adminConfirm = (options: SweetAlertOptions) =>
  Swal.fire(mergeOptions(baseOptions, { icon: 'warning', showCancelButton: true }, options));

/** Success dialog */
export const adminSuccess = (options: SweetAlertOptions) =>
  Swal.fire(mergeOptions(baseOptions, { icon: 'success' }, options));

/** Error dialog */
export const adminError = (options: SweetAlertOptions) =>
  Swal.fire(mergeOptions(baseOptions, { icon: 'error', confirmButtonColor: '#ef4444' }, options));

/** Loading state */
export const adminLoading = (title = 'PROCESSING...') =>
  Swal.fire(mergeOptions(baseOptions, {
    title,
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => Swal.showLoading(),
  }));

/** Toast notification (top-right) */
export const adminToast = (title: string, icon: 'success' | 'error' | 'info' = 'success') =>
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon,
    title,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#1C1C1B',
    color: '#E2E2DE',
    customClass: {
      popup: 'rounded-none border-2 border-[#494947] shadow-[4px_4px_0px_#000000]',
      title: 'font-black uppercase tracking-wider text-sm',
    },
  });

/** Input dialog (e.g., rejection reason) */
export const adminInput = (options: SweetAlertOptions) =>
  Swal.fire(mergeOptions(baseOptions, { input: 'textarea' as const }, options));

export default Swal;
