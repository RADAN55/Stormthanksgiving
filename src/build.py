import os
p=open('page.html').read()
for b in ['k1','23','45','68','912']:
    d=open(f'bands/data_{b}.js').read()
    out=p.replace('__DATA__', d)
    folder={'k1':'k-1','23':'grades-2-3','45':'grades-4-5','68':'grades-6-8','912':'grades-9-12'}[b]
    os.makedirs(f'../{folder}',exist_ok=True)
    open(f'../{folder}/index.html','w').write(out)
print('built')
