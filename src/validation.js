export const initial = {name:'',email:'',phone:'',course:'',password:'',confirm:'',terms:false};
export const checks = p => [p.length>=8, /[A-Z]/.test(p), /[a-z]/.test(p), /\d/.test(p), /[^\w\s]/.test(p)];
export function validate(v){
 const e={};
 if(!/^[\p{L}][\p{L} .'-]{1,59}$/u.test(v.name.trim())) e.name='Enter a valid full name (2–60 characters).';
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email='Enter a valid email address.';
 if(!/^[6-9]\d{9}$/.test(v.phone)) e.phone='Enter a valid 10-digit Indian mobile number.';
 if(!['Computer Engineering','IT','Mechanical','Electronics','Design'].includes(v.course)) e.course='Select your course.';
 if(!checks(v.password).every(Boolean)) e.password='Use 8+ characters, uppercase, lowercase, number and symbol.';
 if(!v.confirm || v.confirm!==v.password) e.confirm='Passwords must match.';
 if(!v.terms) e.terms='You must accept the terms.';
 return e;
}
